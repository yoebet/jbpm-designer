
Ext.form.MultiSelectField = Ext.extend(Ext.form.TriggerField, {
    triggerClass: 'x-form-trigger',
    readOnly: true,
    hiddenValue: '',
    value: '',
	dataSource: [],
    valueSeparator: ',',
    displaySeparator: ', ',
    valueField: 'id',
    displayField: 'name',

    initComponent: function() {
		Ext.QuickTips.init();
        Ext.form.MultiSelectField.superclass.initComponent.call(this);
    },

    onRender: function(ct, position) {
        Ext.form.MultiSelectField.superclass.onRender.call(this, ct, position);

        if (this.hiddenName) {
            this.hiddenField = this.el.insertSibling({ tag: 'input', type: 'hidden', name: this.hiddenName, id: (this.hiddenId || this.hiddenName) },
                    'before', true);
            this.hiddenField.value =
                this.hiddenValue !== undefined ? this.hiddenValue :
                this.value !== undefined ? this.value : '';

            // prevent input submission
            this.el.dom.removeAttribute('name');
        }

        // build the menu
        if (this.menu == null) {
            this.menu = new Ext.menu.Menu();
            this.menu.on('hide', function() {
                if (this.tmp != this.lastSelectionText && this.lastSelectionText != '') {
                    this.tmp = this.lastSelectionText;
                    this.fireEvent('change', this);
                }
            }, this)
            this.dataSource.each(function(r) {
                this.menu.add(
        			new Ext.menu.CheckItem({
        			    text: r.data[this.displayField],
        			    value: r.data[this.valueField],
        			    hideOnClick: false
        			})
        		).on('click', this.clickHandler, this);
            }, this);
        }

        this.populateList(this.value);
    },

    onTriggerClick: function() {
        if (this.disabled) {
            return;
        }

        this.menu.show(this.el.dom.parentNode, "bottom");
        this.menu.el.setTop(this.menu.el.getTop() + this.el.getHeight() - 1);

        // Correcting container height.
        if (this.containerHeight != '' && this.menu.el.getHeight() > this.containerHeight) {
            this.menu.el.setHeight(this.containerHeight);
            this.menu.el.dom.style.overflowY = 'auto';
        }

        // Correcting items' and container width.
        var width = this.containerWidth || this.el.getWidth() || this.menu.el.getWidth();
        this.menu.items.each(function(r) {
            r.el.setWidth(width);
            r.el.dom.style.overflowX = 'hidden';
        }, this);
        this.menu.el.setWidth(width);
        this.menu.el.dom.style.overflowX = 'hidden';

        this.populateList(this.value);
    },

    validateBlur: function() {
        return !this.menu || !this.menu.isVisible();
    },

    getValue: function() {
        if (this.hiddenField) {
            return this.hiddenField.value || "";
        } else if (this.valueField) {
            return typeof this.value != 'undefined' ? this.value : '';
        } else {
            return Ext.form.MultiSelectField.superclass.getValue.call(this);
        }
    },

    getText: function() {
		return this.value;
	},

    setValue: function(value, text) {
        if (text == undefined && value != undefined) {
            this.setValues(value.split(this.valueSeparator));
            return;
        } if (value == undefined) {
            value = '';
            text = '';
        }

        this.lastSelectionText = text;
        if (this.hiddenField) {
            this.hiddenField.value = value;
        }
        Ext.form.MultiSelectField.superclass.setValue.call(this, text);
        this.value = value;

        if (text.trim() == '') {
            Ext.QuickTips.getQuickTip().unregister(this.el);
        } else {
            Ext.QuickTips.getQuickTip().register({
                target: this.el,
                text: text//.replace(/,/g,'\n')
            });
        }
    },

    setValues: function(keys) {
        // assemble full text and hidden value
        var text = '';
        var value = '';
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] != undefined && keys[i] != '') {
                // get the full store object
                var item = this.dataSource.query(this.valueField, keys[i]).items[0];
                if (item != undefined) {
                    value += (value != '' ? this.valueSeparator : '') + item.data[this.valueField];
                    text += (text != '' ? this.displaySeparator : '') + item.data[this.displayField];
                }
            }
        }
        this.setValue(value, text);
    },

    selPush: function(key) {
        // rip current value into array
        var keys = this.value == '' ? new Array() : this.value.split(this.valueSeparator);
        var i = keys.length++;
        keys[i] = key;
        this.setValues(keys);
    },

    selDrop: function(key) {
        // rip current value into array
        var keys = this.value.split(this.valueSeparator);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i].toString() == key.toString()) {
                keys[i] = undefined;
            }
        }
        this.setValues(keys);
    },

    onDestroy: function() {
        if (this.menu) {
            this.menu.destroy();
        }
        if (this.wrap) {
            this.wrap.remove();
        }
        Ext.form.MultiSelectField.superclass.onDestroy.call(this);
    },

    clickHandler: function(i, c) {
        if (i.checked == false) {
            this.selPush(i.value, i.text);
        } else {
            this.selDrop(i.value);
        }
    },

    populateList: function(v) {
        if (v == undefined || v == null) v = this.value;

        // uncheck everything
        if (this.menu) {
            this.menu.items.each(function(item) {
                item.setChecked(false);
            });
        }

        // populate preset values
        if (v != undefined && v != '' && v != null) {
            var sel = v.split(this.valueSeparator);
            for (i = 0; i < sel.length; i++) {
                try {
                    var record = this.dataSource.query(this.valueField, sel[i]).items[0];
					if(record){
						var value=record.data[this.valueField];
						this.menu.items.each(function(mi) {
							if (mi.value == value) mi.setChecked(true);
						}, this);
					}
                } catch (e) { 
					ORYX.Log.error("in populateList");
				}
            }
        }
    }
});

Ext.reg('multiselect', Ext.form.MultiSelectField);
