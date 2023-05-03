import ml from "/ml.png";
import ar from "/ar.png";
import vr from "/vr.png";
import { t } from 'i18next';

export const details = [
    {
        title: t("services.items.ml"),
        opener: t("services.items.mlopener"),
        description: t("services.items.mldescription"),
        image: ml,
    },
    {
        title: t("services.items.vr"),
        opener: t("services.items.vropener"),
        description: t("services.items.vrdescription"),
        image: vr,
    },
    {
        title: t("services.items.ar"),
        opener: t("services.items.aropener"),
        description: t("services.items.ardescription"),
        image: ar,
    },
];