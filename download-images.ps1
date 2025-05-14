# Create costumes directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public/costumes"

# Download images
$images = @{
    "knight.jpg" = "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80"
    "noble.jpg" = "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=800&q=80"
    "victorian.jpg" = "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80"
    "pirate.jpg" = "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=800&q=80"
}

foreach ($image in $images.GetEnumerator()) {
    $outputPath = "public/costumes/$($image.Key)"
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}

Write-Host "All images downloaded successfully!" 