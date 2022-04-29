const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");



router.get("/", async (req, res) => {
  try {
    const moreStuff = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
    res.status(200).json(moreStuff);
  } catch (err) {
    console.log(`${err}`);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const createTag = await Tag.create({ tag_name: req.body.tag_name });
    res.status(200).json(createTag);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.put("/:id", async (req, res) => {
  try {
    const putTagid = await Tag.update({ tag_name: req.body.tag_name });
    res.status(200).json(putTagid);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await ProductTag.destroy({
      where: {
        tag_id: req.params.id,
      },
    });
    await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(err);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;