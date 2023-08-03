import Avatar from "@mui/material/Avatar";

// Gera um cor a partir de uma string
function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

// Obtém a inicial de nomes
function getInitials(name: string, max = 2) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, max) // Exibir apenas as duas primeiras iniciais
    .join("");

  return initials;
}

type IMyAvatarProps = {
  name: string;
};

const MyAvatar = ({ name }: IMyAvatarProps) => {
  return (
    <Avatar variant="rounded" sx={{ bgcolor: stringToColor(name) }}>
      {getInitials(name)}
    </Avatar>
  );
};

export { MyAvatar };
