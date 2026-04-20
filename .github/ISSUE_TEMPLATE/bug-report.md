name: "Bug Report"
description: "Reporte de error (bug) con pasos de reproducción"
title: "[Bug] "
labels: ["Bug"]
assignees: []

body:
  - type: textarea
    id: descripcion
    attributes:
      label: Descripción
      placeholder: "¿Qué está pasando? ¿Qué esperaban que pase?"
    validations:
      required: true

  - type: textarea
    id: pasos
    attributes:
      label: Pasos para reproducir
      placeholder: "1. ... 2. ... 3. ..."
    validations:
      required: true

  - type: textarea
    id: evidencia
    attributes:
      label: Evidencia (capturas / links / logs)
      placeholder: "Capturas, consola, errores del navegador, respuesta HTTP, etc."
    validations:
      required: true

  - type: dropdown
    id: sprint
    attributes:
      label: Sprint
      options:
        - Sprint 0
        - Sprint 1
        - Sprint 2
        - Sprint 3
        - Sprint 4
    validations:
      required: true

  - type: input
    id: conventional-scope
    attributes:
      label: Rama / scope sugerido (para commits)
      description: Ej: `fix(api-products)` (sin prefijo de tipo si ya usas `fix` en la rama)
      placeholder: `api-products`
    validations:
      required: false
