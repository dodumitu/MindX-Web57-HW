//EX2

function checkRole(role) {
    console.log("checkRole");
    return (req, res, next) => {
      const user = res.user;
      const userRole = user.role;
      if (userRole !== role) {
        res.send({ success: 0, message: "this role does not have authority" });
      }
      next();
    };
  }
  
  module.exports = checkRole;