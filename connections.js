// Define connections
export const connections = [


    { 
        from: 'castor', 
        to: 'pollux', 
        lineId: 'line1', 
        type: 'Familial',
        subtype: 'Siblings'
    },

    { 
        from: 'nzuri', 
        to: 'sapphire', 
        lineId: 'line2',
        type: 'Familial',
        subtype: 'Siblings'
    },

    { 
        from: 'nzuri', 
        to: 'anju', 
        lineId: 'line3',
        type: 'Romantic',
        subtype: 'Girlfriends'
    },

    { 
        from: 'anju', 
        to: 'sapphire', 
        lineId: 'line4',
        type: 'Platonic',
        subtype: 'Traveling companions'
    },

    { 
        from: 'sapphire', 
        to: 'castor', 
        lineId: 'line5',
        type: 'Platonic',
        subtype: 'Training buddies'
    },

    { 
        from: 'sapphire', 
        to: 'valerian', 
        lineId: 'line6',
        type: 'Platonic',
        subtype: 'Prosthesis Tech'
    },

    { 
        from: 'nzuri', 
        to: 'catalina', 
        lineId: 'line7',
        type: 'Platonic',
        subtype: 'Healed and helped'
    },

    { 
        from: 'nzuri',
        to: 'viper', 
        lineId: 'line8',
        type: 'Platonic',
        subtype: 'Childhood friends'
    },

    { 
        from: 'valerian', 
        to: 'clarina', 
        lineId: 'line9',
        type: 'Platonic',
        subtype: 'Childhood Friends'
    },

    { 
        from: 'valerian', 
        to: 'leander', 
        lineId: 'line10',
        type: 'Platonic',
        subtype: 'Aquantances at the flower shop/clinic'
    },

    { 
        from: 'virdan', 
        to: 'sapphire', 
        lineId: 'line11',
        type: 'Platonic',
        subtype: 'Crossed paths'
    },

    { 
        from: 'sapphire', 
        to: 'viper', 
        lineId: 'line12',
        type: 'Platonic',
        subtype: 'Met during a train robbery'
    }

];

// Connections colors
export const relationshipColors = {
    'Platonic': 'rgb(63, 104, 206)',
    'Familial': 'rgba(162, 201, 170, 1)',
    'Romantic': 'rgba(255, 29, 141, 1)',
    'Other':    'rgba(117, 117, 117, 1)'
};