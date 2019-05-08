export const setStore= (key,content) =>{
	if(!key) return;
	if(typeof content !=='string'){
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(key,content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}
