#!/bin/bash

# Ajuste o caminho se a pasta components estiver na raiz (ex: "./components")
COMPONENTS_DIR="./src/components/layout"

# Verifica se a pasta components existe
if [ ! -d "$COMPONENTS_DIR" ]; then
  echo "❌ Erro: Diretório '$COMPONENTS_DIR' não encontrado."
  exit 1
fi

# Percorre apenas os diretórios dentro de components
for dir in "$COMPONENTS_DIR"/*/; do
  # Garante que é um diretório válido (caso components esteja vazia)
  [ -d "$dir" ] || continue

  # Extrai apenas o nome da pasta (ex: Alert, Card, Sidebar)
  name=$(basename "$dir")

  tsx_file="${dir}${name}.tsx"
  css_file="${dir}${name}.css"

  # Cria o arquivo .tsx se ainda não existir
  if [ ! -f "$tsx_file" ]; then
    cat <<EOF > "$tsx_file"
import './${name}.css';

export function ${name}() {
  return (
    <div className="${name,,}">
      ${name}
    </div>
  );
}
EOF
    echo "✅ Criado: ${name}/${name}.tsx"
  else
    echo "⚠️  Já existe: ${name}/${name}.tsx"
  fi

  # Cria o arquivo .css vazio se ainda não existir
  if [ ! -f "$css_file" ]; then
    touch "$css_file"
    echo "✅ Criado: ${name}/${name}.css"
  else
    echo "⚠️  Já existe: ${name}/${name}.css"
  fi
done