# restaurant and webpack practice

# design link: https://www.figma.com/design/Nsin7cC9Vb4yTAqRCmF4Lv/FOOD-WEBSITE-UI---BURGER-WEBSITE--Community-?node-id=0-1&p=f&t=KxtVCZ03HtgOwn4C-0

# Deployment 1st time

- npm run build
- git add dist -f && git commit -m "Deployment commit"
- git subtree push --prefix dist origin gh-pages
- git checkout main

#Deployment

- npm run build
- git add dist -f && git commit -m "Deployment commit"
- git subtree split --prefix dist -b gh-pages-temp
- git push origin gh-pages-temp:gh-pages --force
- git branch -D gh-pages-temp
