module.exports = {
	outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* количество столбцов сетки */
	offset: '30px', /*отступы*/
	//mobileFirst: true,
	container: {
        maxWidth: '1190px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
	breakPoints: {
        m: {
            width: "2000px",
        },
        mr: {
            width: "1600px",
        },
        mt: {
            width: "1400px",
        },
        mp: {
            width: "1200px",
        },
        mds: {
            width: "1024px",
        },
        md: {
            width: "990px",
        },
        sm: {
            width: "768px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "414px",
            /*
            offset: "10px",
            fields: "5px"
            */
        },
        mxs: {
            width: "360px"
        },
        mmxs: {
            width: "320px"
        }
	},
    //detailedCalc: true
};