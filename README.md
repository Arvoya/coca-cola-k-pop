# Coca-Cola Meets K-POP

## AI Generated Advertisements

### Process

1. **Data Collection**
    - **Coca-Cola**
        - [Coca-Cola Branding PDF](https://www.coca-colacompany.com/content/dam/company/us/en/visual-identity-pdf/the-coca-cola-foundation-visual-identity-2021.pdf)
        - [Coca-Cola Wikipedia SVG](https://simple.m.wikipedia.org/wiki/File:Coca-Cola_logo.svg)
2. **Video Generation**
    - **Replicate Diffusion Modals**
        - [Animate-diff (for text to video)](https://replicate.com/lucataco/animate-diff)
        - [i2vgen-xl (for image to video)](https://replicate.com/ali-vilab/i2vgen-xl)
3. **Image Generation**
    - **Replicate Diffusion Modals**
        - [sdxl-Lightning-4step](https://replicate.com/bytedance/sdxl-lightning-4step)

### Challenges

1. Variety of Diffusion Modals
    - Many give poor quality results, some are too slow to run
2. Video Generation
    - Technology is still in its infancy, many models are not able to generate
    high quality videos in a reasonable amount of time
3. Image Generation
    - Many models do not generate eyes, faces, or hands well

### Solutions

1. Trial and Error in finding with modals work best
2. Use generated images to guide video generation
3. Use modals that allow for prompts as well as negative prompts to better guide
the generation process
    - Other tips: Use various themes and styles to generate diverse images
