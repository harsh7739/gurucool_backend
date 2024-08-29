const express=require("express");
const { Url } = require("../model/url.model");

const urlRouter=express.Router()


// Route to shorten a URL
urlRouter.post('/shorten', async (req, res) => {
    const { originalUrl } = req.body;
    if (!originalUrl) {
      return res.status(400).json({ error: 'Original URL is required' });
    }
  
    // Generate a unique short URL
    const shortUrl = nanoid(8); // Adjust shorten URL length according to reqirement
  
    try {
      // Save to database
      const newUrl = new Url({ originalUrl, shortUrl });
      await newUrl.save();
  
      res.json({ originalUrl, shortUrl: `${req.headers.host}/${shortUrl}` });
    } catch (error) {
      res.status(500).json({ error: 'Error saving to the database' });
    }
  });


  // Route to redirect short URL to original URL
urlRouter.get('/:shortUrl', async (req, res) => {
    const { shortUrl } = req.params;
  
    try {
      const urlRecord = await Url.findOne({ shortUrl });
  
      if (urlRecord) {
        res.redirect(urlRecord.originalUrl);
      } else {
        res.status(404).json({ error: 'URL not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });

  module.exports={urlRouter}