export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const value = ([c1 = 'black', c2 = 'black']) => {
  return (COLORS.indexOf(c1) * 10) + COLORS.indexOf(c2)
};
