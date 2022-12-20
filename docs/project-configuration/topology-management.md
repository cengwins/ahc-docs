---
sidebar_label: 'Topology Management'
sidebar_position: 2
---

# Topology Management

:::caution

This feature is not enabled right now.

:::

You can set the network topology that will be used in the experiment from the configure section in [project dashboard](./../getting-started//project-dashboard). You can edit the topology by editing the `ahc.yaml` or using the UI on that page. In both of the methods, the topology is stored as a graph in the `ahc.yaml` file.

## Editing Topology from `ahc.yaml`

```yml
topology:
  nodes:
    - id: 0
      x: 424
      y: 185
    - id: 1
      x: 811
      y: 373
  edges:
    - from: 1
      to: 0
      id: 0
```

The above graph represents two nodes and an edge between them. The nodes have ids `0` and `1` and are located in `x = 424, y = 185` and `x = 811, y = 373`. The edge between them is a directed edge that goes from the second node to the first one.

## Editing With UI

There is an interactive user interface in the [project dashboard](./../getting-started//project-dashboard.md)'s configure section. Here you can add nodes and edges using the buttons above and move them on the screen to decide on their locations.
