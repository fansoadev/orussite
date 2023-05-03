import webapplication from "/development-web-development-svgrepo-com.svg";
import iot from "/internet-svgrepo-com 1.svg";
import graphic from "/pen-tool-graphic-design-svgrepo-com.svg";
import mobile from "/mobile-phone-svgrepo-com.svg";
import machinelearning from "/device-electronic-machine-4-svgrepo-com 1.svg";
import gaming from "/videogame-svgrepo-com 1.svg";
import { Animation } from "../enums/animations";
import { t } from 'i18next';

export const services = [
    {
        title: t("services.items.web"),
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: webapplication,
        animation: Animation.spinning
    },
    {
        title: t("services.items.automation"),
        subtitle: "We create a piece of software that allows you to define software testing tasks, which is afterward run with as little human interaction as possible",
        image: iot,
        animation: Animation.spinning
    },
    {
        title: t("services.items.graphic"),
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: graphic,
    },

    {
        title: t("services.items.mobile"),
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: mobile,
    },
    {
        title: t("services.items.ml"),
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: machinelearning,
    },
    {
        title: t("services.items.gaming"),
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: gaming,
    },
];