name: "Sprint Task"
description: "Tarea para un sprint del Proyecto Integrador (1 tarjeta = 1 rama)"
title: "TASK-XX — "
labels: ["feature", "P1 — alto", "M — medium"]
assignees: []

body:
  - type: markdown
    attributes:
      value: "## Definición"

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

  - type: dropdown
    id: tipo
    attributes:
      label: Tipo
      options:
        - feature
        - bug
        - tech-debt
    validations:
      required: true

  - type: input
    id: rama
    attributes:
      label: Rama sugerida (1 tarjeta = 1 rama)
      description: Ej: `feature/US-01-home`, `bugfix/US-02-login`, `refactor/US-05-validaciones`.
    validations:
      required: true

  - type: textarea
    id: descripcion
    attributes:
      label: Descripción de la tarea
      placeholder: "¿Qué hay que lograr? ¿Qué parte del enunciado cubre?"
    validations:
      required: true

  - type: textarea
    id: definition_of_done
    attributes:
      label: Definition of Done
      placeholder: "Checklist que confirma que se terminó"
      value: |
        - [ ] Cumple el enunciado del sprint
        - [ ] Funciona en local
        - [ ] Evidencias (capturas / links) si aplica
    validations:
      required: true

  - type: textarea
    id: evidencia
    attributes:
      label: Evidencia / Links
      placeholder: "Links a PR, deploy, capturas, Postman collection, etc."
    validations:
      required: false
