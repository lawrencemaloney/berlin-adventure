echo 'switching to Branch Main'
git checkout main

echo "Building..."
npm run build

echo "Deploying files to server..."
scp -r dist/* larrymm@173.230.133.229:/var/www/html/
echo "Done! Hopefully"
