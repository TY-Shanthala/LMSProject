import serviceUtil from "../../index";

const adminMentorGetAll = () => {
  return serviceUtil
    .get("lms/v1/admin/mentor")
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

const adminMentorSubmit = (payload) => {
  return serviceUtil
    .post("lms/v1/admin/mentor/post", payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

const adminMentorDelete = (payload) => {
  return serviceUtil
    .deleteAll(`lmsuser/mentordelete?empId=${payload}`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

export { adminMentorGetAll, adminMentorSubmit, adminMentorDelete };
