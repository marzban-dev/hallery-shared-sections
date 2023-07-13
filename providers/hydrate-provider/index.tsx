"use client";

import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

const HydrateProvider = (props: HydrateProps) => {
    return <RQHydrate {...props} />;
};

export default HydrateProvider;
