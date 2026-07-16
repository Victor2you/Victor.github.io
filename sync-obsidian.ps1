# sync-obsidian.ps1
# Obsidian 41_Drafts_Articles(루트 + _Published)의 발행 규칙 준수 파일을 Quartz content/에 동기화
# 사용법: .\sync-obsidian.ps1
#
# 발행 규칙 (2026-07 확정):
#   - 파일명은 영문 슬러그 (예: autonomous-datacenter-roi.md) — 그대로 URL이 됨
#   - frontmatter에 publish: true 필수
#   - 한글·언더스코어·날짜 접두사 파일명은 동기화 대상 아님
#     (기존 한글 파일명 3편은 content/에 영문 이름 정본이 이미 존재 — 볼트 쪽은 보관용)

$source = "C:\Users\victo\Obsidian\Victor-Book\04_Output\41_Drafts_Articles"
$dest = "$PSScriptRoot\content"

Write-Host "📂 Obsidian → Quartz 동기화 시작..." -ForegroundColor Cyan

# 루트와 _Published에서 영문 슬러그 파일명(.md)만 수집
$candidates = @(
    Get-ChildItem "$source\*.md" -ErrorAction SilentlyContinue
    Get-ChildItem "$source\_Published\*.md" -ErrorAction SilentlyContinue
) | Where-Object { $_.BaseName -cmatch '^[a-z0-9]+(-[a-z0-9]+)*$' }

# frontmatter에 publish: true 있는 파일만
$files = $candidates | Where-Object {
    (Get-Content $_.FullName -TotalCount 30 -Raw) -match '(?m)^publish:\s*true\s*$'
}

if ($files.Count -eq 0) {
    Write-Host "⚠️  동기화할 파일이 없습니다. (영문 슬러그 파일명 + publish: true 필요)" -ForegroundColor Yellow
    exit 1
}

foreach ($file in $files) {
    Copy-Item $file.FullName -Destination $dest -Force
    Write-Host "  ✅ 복사됨: $($file.Name)" -ForegroundColor Green
}

Write-Host ""
Write-Host "✨ 동기화 완료! 변경사항을 커밋하려면:" -ForegroundColor Cyan
Write-Host "   git add content/" -ForegroundColor Gray
Write-Host "   git commit -m 'sync: update blog articles from Obsidian'" -ForegroundColor Gray
Write-Host "   git push" -ForegroundColor Gray
