const hasRole = (roles, userRole) => {

  let rolesPermission = []
  
  if(userRole.includes('admin')) return true;

  roles.forEach(element => {
    rolesPermission.push(userRole.includes(element))
  });

  return rolesPermission.includes(true)
};

const getRoles = () => {
  const roles = JSON.parse(localStorage.getItem('roles'));
  return roles;
};

const canDirective = {
  inserted(el, binding) {
    let allowed = false;
    if (binding.arg === 'roles') {
      allowed = hasRole(binding.value, getRoles());
    }

    if (!allowed) {
      el.parentNode.removeChild(el);
    }
  }
};

export default {
  install(Vue) {
    Vue.directive('can', canDirective);
  }
};