#!/usr/bin/env bash
set -e
cd /home/rodrigo/projetos/ltx
export PORT="${PORT:-4500}"
npx --yes serve dist-single -l "$PORT"
