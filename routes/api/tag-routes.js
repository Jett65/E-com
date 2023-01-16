const router = require('express').Router();
const { Tag,Product,ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/',async (req,res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const data = await Tag.findAll(req.body,{
      include: Product
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get('/:id',async (req,res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const data = await Tag.findByPk(req.params.id,{
      include: Product
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/',async (req,res) => {
  // create a new tag
  try {
    const data = await Tag.create(req.body);

    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/:id',async (req,res) => {
  // update a tag's name by its `id` value
  try {
    const data = await Tag.findByPk(req.params.id);

    const updateData = data.update(req.body);

    res.status(200).json(updateData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.delete('/:id',async (req,res) => {
  // delete on tag by its `id` value
  try {
    const data = await Tag.findByPk(req.params.id);

    const deleteData = await data.destroy();

    res.status(200).json(deleteData);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
