document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        // Did you think I was an AI? No, my creator does not have the funds to have an API key
        "Pixel art allows for a unique blend of simplicity and detail.",
        "Early video games relied heavily on pixel art due to hardware limitations.",
        "Creating pixel art can be a meditative and relaxing process.",
        "Pixel art sprites are often used to represent characters in retro games.",
        "The smallest unit in pixel art is a single pixel.",
        "Many pixel artists enjoy the challenge of working within a limited color palette.",
        "Pixel art has seen a resurgence in popularity with the rise of indie games.",
        "Animating pixel art requires careful planning and timing.",
        "Pixel art can convey emotions and expressions despite its simplicity.",
        "One of the joys of pixel art is seeing a small image come to life, pixel by pixel.",
        "Pixel art often draws inspiration from 8-bit and 16-bit video game consoles.",
        "Pixel art can be scaled up to create murals or large prints.",
        "Even a single misplaced pixel can alter the appearance of pixel art significantly.",
        "Pixel art tutorials are widely available online for beginners. Lospec is great",
        "Creating a pixel art character involves designing its sprite sheet for animation.",
        "Pixel art can be used to create detailed isometric views.",
        "Many popular mobile games use pixel art for their graphics.",
        "Pixel art often uses dithering techniques to create gradients.",
        "Retro aesthetics in pixel art can evoke a sense of nostalgia.",
        "Pixel art can be created using software like Photoshop, GIMP, and Aseprite.",
        "Some pixel art pieces are made to look like they belong in old video games.",
        "Modern artists blend pixel art with contemporary styles for unique results.",
        "Game jams often feature pixel art due to its quick production time.",
        "Pixel art requires a balance of creativity and technical skill.",
        "My creator made this site purely because he was too lazy to access google drive and google doc.",
        "Pixel art is often used in creating animated GIFs.",
        "Each pixel in pixel art can represent a single unit of color in a larger image.",
        "Pixel art can be therapeutic and a great way to unwind.",
        "Pixel art is often showcased in art galleries dedicated to digital art.",
        "Pixel art allows for detailed world-building in small spaces.",
        "Pixel art backgrounds can create immersive environments.",
        "The pixelated look is a deliberate artistic choice in many games.",
        "Pixel art can be used to create intricate patterns and designs.",
        "Pixel art icons are popular in user interface design.",
        "Creating pixel art can improve one's understanding of color theory.",
        "Pixel art often features in social media profile pictures.",
        "Pixel art can be combined with other art forms for hybrid creations.",
        "Pixel art can represent both realistic and fantastical elements.",
        "Many artists participate in online pixel art challenges.",
        "Pixel art can be a gateway to learning more complex digital art techniques.",
        "Pixel art often requires a meticulous approach to detail.",
        "Pixel art games are loved for their charm and simplicity.",
        "Pixel art can be used to recreate famous paintings in a new style.",
        "Pixel art can be highly detailed or incredibly minimalistic.",
        "HTML, CSS, and JavaScript are my creator's favorite tools.",
        "Sincerity is always the right choice.",
        "What's better, to be born naturally good? Or to become kind through effort, Parthunaax is an idol.",
        "Pixel art has a timeless appeal, crossing generations.",
        "Pixel art designs can be printed on merchandise like t-shirts and mugs.",
        "Pixel art often inspires fan art and creative communities.",
        "Pixel art can be both a creative outlet and a technical exercise.",
        "Typography is the art and technique of arranging type.",
        "Choosing the right font can dramatically change the tone of a text.",
        "Kerning adjusts the spacing between characters in a word.",
        "Serif fonts are often used in printed books and newspapers.",
        "Sans-serif fonts are commonly used on websites and digital screens.",
        "A well-designed text layout enhances readability and engagement.",
        "Calligraphy is the art of beautiful handwriting.",
        "Different fonts can evoke different emotions and reactions.",
        "Text alignment can influence how a message is perceived.",
        "Typography can turn ordinary words into powerful visual elements.",
        "Text can be styled using bold, italics, and underlining for emphasis.",
        "Handwritten fonts can add a personal touch to digital designs.",
        "Good typography can make complex information more accessible.",
        "Leading, or line spacing, affects how text is read and comprehended.",
        "Creative use of text can transform a simple message into art.",
        "Text can be used to create visual hierarchies in design.",
        "Text effects like shadows and gradients can enhance visual appeal.",
        "Text wrapping allows for a more dynamic flow of information.",
        "Combining different fonts can create a visually engaging design.",
        "Text can be animated for dynamic and interactive experiences.",
        "Text readability is crucial in both print and digital media.",
        "Using white space effectively can improve text layout and design.",
        "Typography can be both functional and decorative.",
        "The choice of text color can impact its visibility and mood.",
        "Text can be aligned left, right, center, or justified.",
        "Typography involves selecting font size, style, and spacing.",
        "Text can convey mood and atmosphere in a story or design.",
        "Text can be styled to mimic different handwriting techniques.",
        "Text can be transformed to fit various shapes and forms.",
        "Font pairing involves combining complementary typefaces.",
        "Creative typography can make a message stand out.",
        "Text can be used to guide a reader's eye through a design.",
        "Text contrast is important for readability and visual impact.",
        "Using decorative fonts can add flair to a design project.",
        "Text can be used to create patterns and textures in design.",
        "Typography can be experimental and push creative boundaries.",
        "Text can be a central element in branding and marketing.",
        "Text can be manipulated to create optical illusions.",
        "Text legibility is essential for effective communication.",
        "Text can be interactive, changing based on user input.",
        "Text can be embedded with hyperlinks for navigation.",
        "The study of text is called typography.",
        "Text can be transformed using CSS for various effects.",
        "A text block can be broken up with headings and subheadings.",
        "Text can be highlighted for emphasis in digital documents.",
        "Text can be animated to grab attention in presentations.",
        "Text shadows can add depth and dimension to typography.",
        "Text can be used to create visually appealing logos.",
        "Text can be stylized with custom fonts for unique branding."
    ];
    
    const imageContainer = document.getElementById('imageContainer');
    const speechBubble = document.getElementById('speechBubble');
    let timeout;
  
    imageContainer.addEventListener('click', () => {
      clearTimeout(timeout); 
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      speechBubble.textContent = randomPhrase;
      speechBubble.style.display = 'block';
  
      timeout = setTimeout(() => {
        speechBubble.style.display = 'none';
      }, 10000); 
    });
  });