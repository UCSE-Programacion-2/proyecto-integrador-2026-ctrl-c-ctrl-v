import ApiError from '../middlewares/ApiError.js';
import Product from '../models/Product.js';

function serialize(product) {
  return {
    id: product._id,
    name: product.name,
    price: product.price,
    category: product.category,
    description: product.description,
    image: product.image,
    attributes: product.attributes,
  };
}

export async function getProducts(req, res, next) {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.status(200).json({ items: products.map(serialize) });
  } catch (error) {
    next(error);
  }
}

export async function getProductById(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      throw new ApiError(404, 'NOT_FOUND', 'Producto no encontrado');
    }

    res.status(200).json({ item: serialize(product) });
  } catch (error) {
    next(error);
  }
}

export async function createProduct(req, res, next) {
  try {
    const {
      name, price, category, description, image, attributes,
    } = req.body;

    if (!name || price === undefined || !category) {
      throw new ApiError(400, 'BAD_REQUEST', 'name, price y category son obligatorios');
    }

    const product = await Product.create({
      name, price, category, description, image, attributes,
    });

    res.status(201).json({ item: serialize(product) });
  } catch (error) {
    next(error);
  }
}

export async function updateProduct(req, res, next) {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      throw new ApiError(404, 'NOT_FOUND', 'Producto no encontrado');
    }

    res.status(200).json({ item: serialize(product) });
  } catch (error) {
    next(error);
  }
}

export async function deleteProduct(req, res, next) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      throw new ApiError(404, 'NOT_FOUND', 'Producto no encontrado');
    }

    res.status(200).json({ item: serialize(product) });
  } catch (error) {
    next(error);
  }
}
