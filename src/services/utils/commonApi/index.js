import serviceUtil from "../../index";

const categoryGet = () => {
  return serviceUtil
    .get(`lms/user/getskills`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.message;
      return { errRes };
    });
};

const technologirsGet = () => {
  return serviceUtil
    .get(`lms/v1/admin/technologies`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.message;
      return { errRes };
    });
};

export { technologirsGet };
