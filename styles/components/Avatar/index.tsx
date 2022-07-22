import Image from "next/image";
import { styled } from "../../theme";

export const Avatar = styled( Image, {
    overflow: "auto",
    borderRadius: "$round",
})