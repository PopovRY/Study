const abbrevName = name =>
    name
        .split(' ')
        .map(name => name[0].toUpperCase())
        .join('.')
