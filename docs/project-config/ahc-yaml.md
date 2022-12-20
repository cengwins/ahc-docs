---
sidebar_label: 'Editing ahc.yaml'
sidebar_position: 1
---

# `ahc.yaml`

Before your experiment starts running the system uses `ahc.yaml` file to configure how your experiment will run on the server.

`ahc.yaml` should be in the main directory of your source code. When this file is saved from the configure section in [project dashboard](./../getting-started/project-dashboard) page, the changes are commited to the repository.

:::info

Make sure that `ahc.yaml` is in the main directory of the repository source code to be effective.

:::

## Example `ahc.yaml`

```yml
image: cengwins/ahc-uhd-image:1.2
command: python3 main.py && python3 testcomposition.py 
env:
  PYTHONUNBUFFERED: "1"
  PYTHONDONTWRITEBYTECODE: "1"
```

## Variables

### Image

The docker container will use the image. The example below uses the `ahc-uhd-image:1.2` as the docker image.

```yml
image: cengwins/ahc-uhd-image:1.2
```

### Command

The initial command that would be ran in the system for your experiment. The example below first runs two python scripts named `main.py` and `testcomposition.py`.

```yml
command: python3 main.py && python3 testcomposition.py 
```

### Env

You can set environment variables using this value. The example below sets 2 environment variables named `PYTHONUNBUFFERED` and `PYTHONDONTWRITEBYTECODE` to `1`.

```yml
env:
  PYTHONUNBUFFERED: "1"
  PYTHONDONTWRITEBYTECODE: "1"
```

### Files

You can set the files that will persist after the experiment using `files` variable. It uses regex to match the file names. The example below sets `*.txt` files to persist. So the system would keep all of the `txt` files after the runs.

```yml
files:
  - "*.txt"
```

### Experiment

You set the topology of the network that  

```yml
experiment:
  runs:
    - name: run-1
      topology: topology1
      sampling_count: 2

    - name: run-2
      topology: topology2
      sampling_count: 2
```

### Topology

`ahc.yaml` file also stores the network topology that's used for the experiments. It is stored as a graph. Below is an example of a graph of 2 nodes and an edge between them. More detailed explanation can be found in [Topology Management](./topology-management).

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
