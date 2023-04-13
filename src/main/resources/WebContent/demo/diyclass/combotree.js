if (!window.UserControl) window.UserControl = {};

UserControl.ComboTree = mini.PopupEdit.extend({
    type: 'combotree',
    tag: 'uc-combotree',

    props: {
        url: '',
        showCheckBox: false
    },

    initComponent: function () {
        this.callParent('initComponent');

        var treebox = new UserControl.TreeBox();
        treebox.set({
            style: 'height:100%',
            borderStyle: 'border:0',
            showCheckBox: this.showCheckBox
        });
        this.treebox = treebox;

        this.set({
            popupWidth: 450,
            popupHeight: 250,
            popup: treebox
        });

        this.bindEvents();
    },
    bindEvents: function () {
        var that = this,
            treebox = that.treebox;

        treebox.on('okclick', function (e) {
            var value = treebox.getValue();
            var text = treebox.getText();
            that.setValue(value);
            that.setText(text);
            that.hidePopup();
            that.focus();
        });

        this.treebox.on('cancelclick', function (e) {
            that.hidePopup();
        });
    },

    setUrl: function (value) {
        this.treebox.setUrl(value);
    },
    setShowCheckBox: function (value) {
        this.treebox.setShowCheckBox(value);
    },
    getAttrs: function (el) {
        var attrs = UserControl.ComboTree.superclass.getAttrs.call(this, el);
        mini._ParseString(el, attrs,
            ["url"]
        );
        mini._ParseBool(el, attrs,
            ["showCheckBox"]
        );

        return attrs;
    }

});
