import mikailBagci from "@assets/images/members/mikailbagci.jpg";
import armaganAykut from "@assets/images/members/armaganaykut.jpg";
import aliAltin from "@assets/images/members/alialtin.jpeg";
import fatihAltin from "@assets/images/members/fatihaltin.jpg";
import muratDercin from "@assets/images/members/muratdercin.jpg";
import hakanElmas from "@assets/images/members/hakanelmas.jpg";
import halilOezkan from "@assets/images/members/haliloezkan.jpg";

export const BOARD_TITLE = "Yönetim Kurulumuz";

export const BOARD_MEMBERS = [
  {
    role: "President",
    firstName: "Mikail",
    lastName: "Bağcı",
    image: mikailBagci,
  },
  {
    role: "V.PRESIDENT",
    firstName: "Armağan",
    lastName: "Aykut",
    image: armaganAykut,
  },
  {
    role: "V.PRESIDENT",
    firstName: "Ali",
    lastName: "Altın",
    image: aliAltin,
  },
  {
    role: "ROAD CAPTAIN",
    firstName: "Fatih",
    lastName: "Altın",
    image: fatihAltin,
  },
  {
    role: "ROAD CAPTAIN",
    firstName: "Murat Burçin",
    lastName: "Dercin",
    image: muratDercin,
  },
  {
    role: "SECRETARY",
    firstName: "Hakan",
    lastName: "Elmas",
    image: hakanElmas,
  },
  {
    role: "TREASURER",
    firstName: "Halil",
    lastName: "Özkan",
    image: halilOezkan,
  },
] as const;
