const { z } = require('zod');

const CreateOrUpdateModel = z.object({
  preferredTheme: z.enum(['light', 'dark', 'system']).default('system'),
  resultsPerPage: z
    .number()
    .min(20, 'Minimum value is 20')
    .max(100, 'Maximum value is 100')
    .default(20),
  sendEmail: z.boolean().default(true),
});

function validateCreateOrUpdate(obj) {
  return CreateOrUpdateModel.parse(obj);
}

module.exports = {
  validateCreateOrUpdate,
};
