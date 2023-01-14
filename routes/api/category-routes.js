const router = require('express').Router();
const { Category,Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req,res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({
      include: Product
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }

});

router.get('/:id',async (req,res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const data = await Category.findByPk(req.params.id,{
      include: Product
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/',async (req,res) => {
  // create a new category
  try {
    const newData = await Category.create(req.body);

    res.send(newData);
    res.status(200).json(newData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/:id',async (req,res) => {
  // update a category by its `id` value
  try {
    const data = await Category.findByPk(req.params.id);

    const updateData = data.update(req.body);

    res.status(200).json(updateData);
  } catch (err) {
    res.status(404).json(err);
  }

});

router.delete('/:id',async (req,res) => {
  // delete a category by its `id` value
  try {
    const data = await Category.findByPk(req.params.id);

    const deleteData = await data.destroy();

    res.status(200).json(deleteData);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;