# Gogglebox Static Page
Small coding challenge designed to test basic HTML/CSS/JS competency for Living Spaces interview

To my understanding, this is to test a few things:
- HTML Structuring and Semantic HTML tags
  - Picture tag was the only ask but relates to 
- Responsive CSS Styling (focus on Flexbox/Breakpoints)
- JQuery Ajax requests
- Dynamic content insertion via JS

## Link to GH Pages Hosted Site
https://ahirota.github.io/ls-gogglebox/

## What it should look like
Mobile:

![Mobile Design](./assets/gogglebox_mobile.jpg)

Desktop:

![Desktop Design](./assets/gogglebox_desktop.jpg)

## Tool Acknoledgments
- JQuery-4.0.0
  - Self hosted for speed improvements over CDN
- SCSS Preprocessor
  - Makes writing CSS not a hassle, was not explicitly disallowed
- Node http-server
  - Easy localhost development for static sites
  - No need for node.js project or dev server via bundler like Vite

## Challenges
Without access to a Photoshop/Figma file for getting exact measurements/spacing/font styling, a lot of this was eyeballing and using the images as reference in Figma.

I also took some liberties with how I decided to implement the responsive spacing across dimensions.

## Potential Improvements
There's quite a few areas of improvements that could be made to enhance this coding challenge.
- Hero Image could be live text with interactive buttons
- More Interactivity in general
- Better folder/code organization
  - All my JS and CSS are a single file.
  - Works for a challenge this small but larger codebases would probably benefit
  - For CSS, I chose to order my selectors from general to specific 
    - It's not easily human readable, perhaps I should have gone with CSS that matched the layout instead