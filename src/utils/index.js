// [a, b] => {a: 1, b: 1}
const getSelectData = (select = []) => {
  return Object.fromEntries(select.map((item) => [item, 1]));
};

const unGetSelectData = (select = []) => {
  return Object.fromEntries(select.map((item) => [item, 0]));
};

const convertToObjectIdMongoDB = (id) => {
  return new Types.ObjectId(id);
};

const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

exports = {
  getSelectData,
  unGetSelectData,
  convertToObjectIdMongoDB,
  asyncHandler,
};
