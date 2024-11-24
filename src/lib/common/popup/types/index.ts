import type { PopupData } from "../index.svelte";
import TermsOfService from "./PopupTOS.svelte";

const tos: PopupData = { render: TermsOfService, focus: true } 

export {
    tos
}