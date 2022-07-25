import { DOMAttributes, HTMLAttributes } from "react";

export interface IFeedItem {
    onClick?: () => void;
    data: any;
}