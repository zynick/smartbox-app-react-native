// @flow

export default (dsZones: Object, gcSettings: Object) => {

    let structure = [];
    let exists = {};

    dsZones.forEach((zone, idx) => {
        const { name } = zone;
        let items = [];
        let _zone = { name, items };

        exists[name] = idx;

        zone.groups.forEach((group) => {
            group.type = 'ds';
            items.push(group);
        });

        structure.push(_zone);
    });

    gcSettings.forEach((zone) => {
        const { name } = zone;
        let items, _zone;

        const idx = exists[name];
        if (idx) {
            // insert
            _zone = structure[idx];
            items = _zone.items;
        } else {
            // append
            items = [];
            _zone = { name, items };
        }

        zone.items.forEach((item) => {
            item.type = 'gc';
            items.push(item);
        });

        if (!idx) {
            // append
            structure.push(_zone);
        }
    });

    return structure;
}
