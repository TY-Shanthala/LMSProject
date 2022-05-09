import serviceUtil from "../../index";

const categoryGet = () => {
  return serviceUtil
    .get(`lmsuser/getskills`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.message;
      return { errRes };
    });
};

export { categoryGet };
