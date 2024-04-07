$port = 50792
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -eq $port } | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
