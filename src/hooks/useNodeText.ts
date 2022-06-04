const useNodeText = () => {

  const getNodeText = (nodeId: number) => {
    switch (nodeId) {
      case 0: return 'Node';
      case 1: return 'Mini Node';
      case 2: return 'Kilo Node';
      case 3: return 'Mega Node';
      case 4: return 'Giga Node';
        default: return 'Node';
    }
  }

  return { getNodeText }
};

export default useNodeText;