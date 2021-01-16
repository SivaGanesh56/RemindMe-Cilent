export const getIcon = (platform) => {
    switch(platform) {
        case 'email':
            return 'far fa-envelope';
        case 'whatsapp':
            return 'fab fa-whatsapp';
        case 'sms':
            return 'fas fa-comment-dots';
        case 'telegram':
            return 'fab fa-telegram-plane';
        default:
            return 'far fa-envelope'
    }
}