<#
Windows convenience wrapper for local development. The official evaluator uses
download_model.sh; both scripts download the same public, credential-free GGUF.
#>
[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$taskRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$modelDirectory = Join-Path $taskRoot 'model'
$modelFile = Join-Path $modelDirectory 'Qwen2.5-0.5B-Instruct-Q4_K_M.gguf'
$modelUrl = 'https://huggingface.co/bartowski/Qwen2.5-0.5B-Instruct-GGUF/resolve/main/Qwen2.5-0.5B-Instruct-Q4_K_M.gguf'

New-Item -ItemType Directory -Path $modelDirectory -Force | Out-Null
if ((Test-Path -LiteralPath $modelFile) -and ((Get-Item -LiteralPath $modelFile).Length -gt 0)) {
    Write-Host "Model already present at $modelFile — skipping download"
    exit 0
}

$partialFile = "$modelFile.partial"
Remove-Item -LiteralPath $partialFile -Force -ErrorAction SilentlyContinue
Write-Host 'Downloading Qwen2.5-0.5B-Instruct-Q4_K_M (~400 MB)…'
Invoke-WebRequest -Uri $modelUrl -OutFile $partialFile
if (-not (Test-Path -LiteralPath $partialFile) -or (Get-Item -LiteralPath $partialFile).Length -eq 0) {
    throw 'The model download was empty.'
}

Move-Item -LiteralPath $partialFile -Destination $modelFile -Force
Write-Host "Done: $modelFile"