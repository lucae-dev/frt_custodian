export function getOrCreateClientId() {
    const key = 'clientId';
    let id = localStorage.getItem(key);
    if (!id) {
      id = crypto.randomUUID(); 
      localStorage.setItem(key, id);
    }
    return id;
  }