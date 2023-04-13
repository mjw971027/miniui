if (!window.UserControl) window.UserControl = {};

UserControl.DateRange = function () {

    UserControl.DateRange.superclass.constructor.apply(this, arguments);

    this.initComponents();
    this.bindEvents();
}

mini.extend(UserControl.DateRange, mini.PopupEdit, {

    uiCls: 'uc-daterange',

    format: 'yyyy-MM-dd',

    initComponents: function () {

        var panel = new mini.Panel();
        panel.set({
            showHeader: false,
            style: 'width:100%;height:100%',
            html: '<div class="mini-splitter" style="width:100%;height:100%;"><div size="50%" ><div name="ca1" ref="c1" class="mini-calendar"></div></div><div><div name="ca2" class="mini-calendar"></div></div></div>'
        });

        //alert(panel.refs.c1);

        this.ca1 = mini.getbyName("ca1", panel);
        this.ca2 = mini.getbyName("ca2", panel);

        this.set({
            popupWidth: 450,
            popupHeight: 225,
            popup: panel
        });
    },
    bindEvents: function () {
        var that = this,
            format = that.format,
            ca1 = that.ca1,
            ca2 = that.ca2;

        function onClick(e) {
            var d1 = ca1.getValue();
            var d2 = ca2.getValue();
            var s = "";
            if (d1) s += mini.formatDate(d1, format);
            if (d2) s += " ~ " + mini.formatDate(d2, format);
            that.setText(s);
        }

        ca1.on("dateclick", onClick);
        ca2.on("dateclick", onClick);
    }

});

mini.regClass(UserControl.DateRange, "DateRange");