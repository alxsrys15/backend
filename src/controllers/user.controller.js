const { validateCreateOrUpdate } = require('../models/user.model');
const prisma = require('../prisma');

async function get(req, res) {
  const { userId: id } = req.params;
  try {
    const userSetting = await prisma.userSetting.findFirstOrThrow({
      where: { id: parseInt(id) },
    });
    res.json({ data: userSetting });
  } catch (err) {
    res.status(400);
    res.json({
      error: {
        message: err.message,
      },
    });
  }
}

const createOrUpdate = async (req, res) => {
  try {
    validateCreateOrUpdate({ ...req.body });
    const userSetting = await prisma.userSetting.upsert({
      create: { ...req.body },
      update: { ...req.body },
      where: { id: parseInt(req.params.userId) },
    });

    res.status(200).json({ data: userSetting });
  } catch (err) {
    if (err.hasOwnProperty('issues')) {
      return res.status(400).json({
        errors: err.issues.map(issue => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      });
    }
    res.status(400).json({ error: err });
  }
};

module.exports = {
  get,
  createOrUpdate,
};
