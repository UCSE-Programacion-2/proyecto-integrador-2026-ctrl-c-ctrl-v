import ApiError from '../middlewares/ApiError.js';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

async function getOrCreateCart(userId) {
  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = await Cart.create({ user: userId, items: [] });
  }

  return cart;
}

function serializeCart(cart) {
  const items = cart.items.map((item) => {
    const { price } = item.product;
    const subtotal = price * item.quantity;

    return {
      productId: item.product._id,
      quantity: item.quantity,
      price,
      subtotal,
    };
  });

  const total = items.reduce((acc, item) => acc + item.subtotal, 0);

  return { items, total };
}

export async function getCart(req, res, next) {
  try {
    const cart = await getOrCreateCart(req.user.id);
    await cart.populate('items.product');

    res.status(200).json(serializeCart(cart));
  } catch (error) {
    next(error);
  }
}

export async function addItem(req, res, next) {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity || quantity < 1) {
      throw new ApiError(400, 'BAD_REQUEST', 'productId y quantity (mayor a 0) son obligatorios');
    }

    const product = await Product.findById(productId);
    if (!product) {
      throw new ApiError(404, 'NOT_FOUND', 'Producto no encontrado');
    }

    const cart = await getOrCreateCart(req.user.id);
    const existingItem = cart.items.find((item) => item.product.toString() === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    await cart.populate('items.product');

    res.status(201).json(serializeCart(cart));
  } catch (error) {
    next(error);
  }
}

export async function removeItem(req, res, next) {
  try {
    const { productId } = req.params;
    const cart = await getOrCreateCart(req.user.id);

    const itemExists = cart.items.some((item) => item.product.toString() === productId);
    if (!itemExists) {
      throw new ApiError(404, 'NOT_FOUND', 'El producto no está en el carrito');
    }

    cart.items = cart.items.filter((item) => item.product.toString() !== productId);

    await cart.save();
    await cart.populate('items.product');

    res.status(200).json(serializeCart(cart));
  } catch (error) {
    next(error);
  }
}
