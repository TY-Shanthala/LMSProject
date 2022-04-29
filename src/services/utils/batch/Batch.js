import serviceUtil from "../../../style/services/util/Index";

const batchGetAll = () => {
  return serviceUtil
    .get("lms/admin/api/batch")
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

export { batchGetAll };
