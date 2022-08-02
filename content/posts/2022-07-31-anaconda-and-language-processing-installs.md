---
title: "Anaconda and language processing installs"
author: salopst
date: 2022-07-31T12:29:51+0100
lastmod: NULL
slug:  "anaconda-and-language-processing-installs"
layout: post
origin: hugo
draft: false
toc: false
noLicense: false
weight: 1001
images: null  
categories:
- Tech
- Python
tags:
- languages
- Greek
---

# Anaconda and language processing installs

Pues, entiendo el CLTK *et al.* no es tan facíl! Aquí está una guía corta para que pueda instalarlo y usarlo (porque seguramente olvidaré cómo hacer esta próxima "nuke and pave" o cambio de distro).

> 🔥 **Big Burn**
> As in real-estate ("location, location, location"), so the sandy ground of libraries and their APIs.
> **¡No te confundas versiones de cltk 0.10 y 1.0 como yo lo hice!**

**Ejemplo**... 0.10 tiene

- `from cltk.stem.latin.declension   import CollatinusDecliner`

Mientras que 1.0 tiene

- `from cltk.morphology.lat  import CollatinusDecliner`.

Por supuesto no será una problema en el futuro, pero en este momento de transición...

## Instalar Anaconda parar maintenimiento de versiones de Python

No se porque no he usando Anaaconda anttes de hoy... Seguro q no soy pythonista.

```bash
# paquetes requeridos
sudo apt install libgl1-mesa-glx libegl1-mesa libxrandr2 libxrandr2 libxss1 libxcursor1 libxcomposite1 libasound2 libxi6 libxtst6
```

- Descargar con browser desde <https://www.anaconda.com/products/distribution#linux>
- Usar valores predeterminados... «sí» para todo

> 💡
> Anaconda no modifica `~/.zshrc`... pues copia lineas desde`~/.bashrc`. `source ~/.zshrc` then run `conda init zsh` and `source ~/.zshrc` otra vez

## Crear y usar un nuevo environmento (version de Python)

Version de systema es 3.9.2

```bash
conda create -n env37 python=3.7
conda activate env37
```

## Instalar paquetes de NLTK, CLTC and others

```bash
pip3 install --user -U cltk spacy nltk nlp greek-accentuation install googletrans==4.0.0-rc1
```

Rationalize some of this...

```python
packages = ['greek-accentuation', 'cltk', 'spacy', 'nltk', 'ntp', 'googletrans==4.0.0-rc1'
]
def install_packages(packages):
  for package in packages:
    print('Installing {}...'.format(package))
    subprocess.call(['pip3', 'install', '--user', '-U', package])
    
install_packages(packages)
```

## NLTK Data

Interactive python shell:

```python
>>> import nltk
>>> nltk.download()
# launches gui... cogido todo
```

## CLTK Data

Interactive python shell:

```python
>>> from cltk.data.fetch import FetchCorpus
>>> corpus_downloader = FetchCorpus(language="lat")
>>> corpus_downloader.import_corpus("lat_models_cltk")
>>> corpus_downloader = FetchCorpus(language="grc")
>>> corpus_downloader.import_corpus("grc_models_cltk")
```

## venv

- virtual env required since NLP only runs on Python 3.7
- venv installs pip packages local to the project rather than polluting the system python install. This keeps all the gubbins in one place and makes for easiter distribution.
- When a virtual environment is active, the VIRTUAL_ENV environment variable is set to the path of the virtual environment.
- pip requirements are installed in the virtual environment.
- pip install -r requirements.txt
  
```bash
sudo apt-get install -y python3-pip
sudo apt-get install -y python3-venv
sudo apt-get install build-essential libssl-dev libffi-dev python-dev
## python3 -m venv /path/to/my/virtual/environment
cd ~/Projects/koine/
python3 -m venv koine_venv
source koine_venv/bin/activate
```
