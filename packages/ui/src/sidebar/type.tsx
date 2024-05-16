interface sideBarTabDataDto {
    label: string,
    link: string,
    icon: React.ReactNode
}

export type sidebar_props = {
    name: string,
    role: string,
    activeSidebarTab: string,
    sideBarTabData: sideBarTabDataDto[],
    showMakeAnnouncement: Boolean,
    makeAnnouncementHandler?: Function,
    createEventHandler?: Function,
    showCreateEvent: Boolean,


}