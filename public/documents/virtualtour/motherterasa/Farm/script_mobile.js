(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"backgroundColor":["#FFFFFF"],"scripts":{"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"textToSpeech":TDV.Tour.Script.textToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"createTween":TDV.Tour.Script.createTween,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"translate":TDV.Tour.Script.translate,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"init":TDV.Tour.Script.init,"getKey":TDV.Tour.Script.getKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"cloneBindings":TDV.Tour.Script.cloneBindings,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setLocale":TDV.Tour.Script.setLocale,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizShowScore":TDV.Tour.Script.quizShowScore,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playAudioList":TDV.Tour.Script.playAudioList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"unregisterKey":TDV.Tour.Script.unregisterKey,"existsKey":TDV.Tour.Script.existsKey,"isPanorama":TDV.Tour.Script.isPanorama,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initAnalytics":TDV.Tour.Script.initAnalytics,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindow":TDV.Tour.Script.showWindow,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeJS":TDV.Tour.Script.executeJS,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"clone":TDV.Tour.Script.clone,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getOverlays":TDV.Tour.Script.getOverlays,"startMeasurement":TDV.Tour.Script.startMeasurement,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupImage":TDV.Tour.Script.showPopupImage,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"downloadFile":TDV.Tour.Script.downloadFile,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizStart":TDV.Tour.Script.quizStart,"setValue":TDV.Tour.Script.setValue,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"registerKey":TDV.Tour.Script.registerKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"openLink":TDV.Tour.Script.openLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizFinish":TDV.Tour.Script.quizFinish,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getComponentByName":TDV.Tour.Script.getComponentByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPixels":TDV.Tour.Script.getPixels,"initQuiz":TDV.Tour.Script.initQuiz,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"resumePlayers":TDV.Tour.Script.resumePlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaWidth":TDV.Tour.Script.getMediaWidth},"id":"rootPlayer","class":"Player","data":{"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"rate":1,"pitch":1},"defaultLocale":"en","history":{},"name":"Player35526"},"buttonToggleFullscreen":"this.IconButton_A7FB26DD_E269_0F2E_41B1_8D708D2EEA4C","propagateClick":false,"children":["this.MainViewer_mobile","this.Image_D7CF8505_E239_0D1E_41C4_89F5F8A25965_mobile","this.Image_D8A907B0_E229_0D76_41DD_690C472DEA00_mobile","this.Container_DAFEA0F8_E22B_04F7_41D8_3A6DF7A8BB60_mobile","this.Container_A7FB46DD_E269_0F2E_41E7_13E608862749","this.Container_33BA1F72_1A7A_345B_41B2_D62909404F79"],"defaultMenu":["fullscreen","mute","rotation"],"hash": "6ac5431ed60a0d829c1c1a2bcf6761720a7fc04d5823c908f98419bfe667075e", "definitions": [{"id":"Label_33BBEF72_1A7A_345B_4186_0BC9AFD3E0A8","fontSize":"2vmin","class":"Label","backgroundOpacity":0,"data":{"name":"Label58804"},"propagateClick":false,"fontWeight":"bold","text":trans('Label_33BBEF72_1A7A_345B_4186_0BC9AFD3E0A8.text'),"width":"43.257%","height":"100%","fontColor":"#FFFFFF","minHeight":8,"minWidth":15,"fontFamily":"Arial"},{"id":"Label_33BA3F72_1A7A_345B_41AA_9C6999C2F571","fontSize":"2vmin","class":"Label","click":"this.openLink(this.translate('LinkBehaviour_33BA2F72_1A7A_345B_4199_4D945ED424FA.source'), '_blank')","backgroundOpacity":0,"data":{"name":"Label59916"},"paddingLeft":1.5,"propagateClick":false,"fontWeight":"bold","text":trans('Label_33BA3F72_1A7A_345B_41AA_9C6999C2F571.text'),"width":"43%","textDecoration":"underline","height":"100%","minHeight":8,"minWidth":15,"fontFamily":"Arial","fontColor":"#FFFFFF"},{"toolTipBorderColor":"#767676","id":"MainViewer_mobile","class":"ViewerArea","progressBackgroundColorRatios":[0],"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingRight":3,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressRight":"33%","data":{"name":"Main Viewer"},"progressBarBackgroundColorDirection":"horizontal","toolTipFontColor":"#606060","playbackBarHeadShadowColor":"#000000","progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","progressOpacity":0.7,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeight":10,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBottom":50,"playbackBarProgressBorderSize":0,"firstTransitionDuration":0,"playbackBarHeadBorderSize":0,"progressBorderColor":"#000000","playbackBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowBlurRadius":1,"toolTipBorderRadius":1,"progressBackgroundColor":["#000000"],"toolTipTextShadowBlurRadius":1,"subtitlesTextShadowColor":"#000000","width":"100%","toolTipFontSize":"1.11vmin","subtitlesTop":0,"subtitlesFontSize":"3vmin","minHeight":25,"progressBottom":10,"playbackBarBottom":5,"height":"100%","toolTipShadowColor":"#333138","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","playbackBarHeadBorderRadius":0,"progressBarBorderSize":0,"minWidth":50,"toolTipFontFamily":"Arial","progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"progressHeight":2,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundOpacity":1,"progressBorderRadius":2,"playbackBarHeadShadow":true,"propagateClick":false,"playbackBarHeadShadowOpacity":0.7,"progressLeft":"33%","subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":3,"subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","playbackBarLeft":0,"playbackBarRight":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadWidth":6,"vrPointerSelectionColor":"#FF6600","toolTipBackgroundColor":"#F6F6F6","subtitlesGap":0,"playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"playbackBarBorderRadius":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":1.5,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadHeight":15},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_D484DF88_E239_3D17_41DC_D249026D6F75_camera","displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"easing":"cubic_in_out","class":"TargetRotationalCameraDisplayMovement","targetPitch":0,"targetStereographicFactor":0}],"class":"PanoramaCamera","displayOriginPosition":{"stereographicFactor":1,"class":"RotationalCameraDisplayPosition","yaw":0,"pitch":-90,"hfov":165},"enterPointingToHorizon":true,"initialSequence":"this.sequence_D1410839_E239_0369_41DB_A936131F1DD4"},{"id":"panorama_D484DF88_E239_3D17_41DC_D249026D6F75","label":trans('panorama_D484DF88_E239_3D17_41DC_D249026D6F75.label'),"frames":[{"thumbnailUrl":"media/panorama_D484DF88_E239_3D17_41DC_D249026D6F75_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"colCount":36,"height":3072,"tags":"ondemand","url":"media/panorama_D484DF88_E239_3D17_41DC_D249026D6F75_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":6,"width":18432},{"colCount":18,"height":1536,"tags":"ondemand","url":"media/panorama_D484DF88_E239_3D17_41DC_D249026D6F75_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":3,"width":9216},{"colCount":12,"height":1024,"tags":"ondemand","url":"media/panorama_D484DF88_E239_3D17_41DC_D249026D6F75_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144},{"colCount":6,"height":1536,"url":"media/panorama_D484DF88_E239_3D17_41DC_D249026D6F75_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":9216},{"colCount":6,"height":2048,"tags":"mobilevr2gen","url":"media/panorama_D484DF88_E239_3D17_41DC_D249026D6F75_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":12288}],"class":"ImageResource"}}],"hfovMax":130,"class":"Panorama","data":{"label":"Farm"},"hfovMin":"120%","vfov":180,"hfov":360,"thumbnailUrl":"media/panorama_D484DF88_E239_3D17_41DC_D249026D6F75_t.jpg"},{"touchControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer","buttonCardboardView":"this.IconButton_A7FB56DD_E269_0F2E_41EA_56D432AC81D2","aaEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer_mobile","arrowKeysAction":"translate","mouseControlMode":"drag_rotation"},{"id":"mainPlayList","class":"PlayList","items":[{"end":"this.trigger('tourEnded')","start":"this._initItemWithComps(this.mainPlayList, 0, [this.Container_DAFEA0F8_E22B_04F7_41D8_3A6DF7A8BB60_mobile], 'begin', true, this.FadeInEffect_33BB64BB_1A7A_54C8_41A2_8B3D62DBE5D9, 0, 0); this._initItemWithComps(this.mainPlayList, 0, [this.Container_DAFEA0F8_E22B_04F7_41D8_3A6DF7A8BB60_mobile], 'end', false, this.FadeOutEffect_33BB74BB_1A7A_54C8_41B8_3D7CAFD12BC3, 0, 0)","class":"PanoramaPlayListItem","camera":"this.panorama_D484DF88_E239_3D17_41DC_D249026D6F75_camera","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_D484DF88_E239_3D17_41DC_D249026D6F75"}]},{"id":"audio_DE32AF5C_E259_3D2F_41E8_C39D5754D8D2","autoplay":true,"class":"MediaAudio","data":{"label":"nature-music-guitar-ahmad-mousavi-pour-11762"},"audio":"this.audiores_DE61F6F4_E259_0CFF_41C6_9C6FEC803D6D"},{"id":"IconButton_A7FB26DD_E269_0F2E_41B1_8D708D2EEA4C","iconURL":"skin/IconButton_A7FB26DD_E269_0F2E_41B1_8D708D2EEA4C.png","class":"IconButton","data":{"name":"IconButton FULLSCREEN"},"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_A7FB26DD_E269_0F2E_41B1_8D708D2EEA4C_pressed.png","mode":"toggle","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_A7FB26DD_E269_0F2E_41B1_8D708D2EEA4C_pressed_rollover.png","maxHeight":29,"maxWidth":29,"height":25.5,"width":25.6,"transparencyActive":true,"minHeight":1,"minWidth":1,"horizontalAlign":"center"},{"id":"effect_DE60CED7_E258_FF39_41E8_BDDEC10DFAF2","duration":500,"class":"FadeOutEffect"},{"id":"Image_D82F824C_E22B_072F_41D9_D27EB631B4A0_mobile","class":"Image","right":"0%","scaleMode":"fit_inside","backgroundOpacity":0,"url":trans('Image_D82F824C_E22B_072F_41D9_D27EB631B4A0_mobile.url'),"data":{"name":"Image39382"},"propagateClick":false,"verticalAlign":"middle","bottom":"0%","width":"100%","height":"100%","minHeight":1,"minWidth":1,"horizontalAlign":"center"},{"id":"effect_D924062F_E227_0F69_41D7_44457099CCB7","duration":500,"class":"FadeInEffect"},{"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"iconWidth":"100%","id":"CloseButton_D5168785_E229_0D19_41B2_49310D6FACD9_mobile","class":"CloseButton","right":"0%","fontSize":"1.29vmin","paddingLeft":2.5,"backgroundOpacity":0.3,"iconColor":"#000000","propagateClick":false,"paddingTop":2.5,"iconHeight":"100%","paddingBottom":2.5,"rollOverIconColor":"#666666","data":{"name":"CloseButton39676"},"paddingRight":2.5,"backgroundColorRatios":[0,0.09803921568627451,1],"top":"0%","layout":"horizontal","borderColor":"#000000","iconLineWidth":1,"width":21,"height":21,"minHeight":1,"minWidth":1,"pressedIconColor":"#888888","fontFamily":"Arial","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_DB6678F0_E229_04F7_41D3_DC3E4526F794, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_DAFEA0F8_E22B_04F7_41D8_3A6DF7A8BB60_mobile); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_DC6EC0E8_E25B_0316_41DC_806BDCAEC9D4, 'showEffect', false)}.bind(this); visibleFunc(this.Image_D8A907B0_E229_0D76_41DD_690C472DEA00_mobile)","fontColor":"#FFFFFF"},{"id":"Container_A7FB46DD_E269_0F2E_41E7_13E608862749","class":"Container","data":{"name":"ContainerVR"},"backgroundOpacity":0,"right":"0.28%","propagateClick":false,"scrollBarOpacity":0.18,"overflow":"scroll","scrollBarMargin":2,"layout":"vertical","scrollBarColor":"#000000","bottom":"7.34%","scrollBarWidth":2,"verticalAlign":"bottom","width":"10.278%","height":"21.516%","minHeight":10,"children":["this.IconButton_A7FB36DD_E269_0F2E_41EA_45B63D78BAAC","this.IconButton_A7FB26DD_E269_0F2E_41B1_8D708D2EEA4C","this.IconButton_A7FB56DD_E269_0F2E_41EA_56D432AC81D2"],"minWidth":10,"horizontalAlign":"center"},{"id":"effect_DC6EC0E8_E25B_0316_41DC_806BDCAEC9D4","duration":500,"class":"FadeInEffect"},{"id":"Image_D7CF8505_E239_0D1E_41C4_89F5F8A25965_mobile","class":"Image","right":"47.5%","scaleMode":"fit_inside","click":"this.openLink(this.translate('LinkBehaviour_A0F7C6ED_E26B_0CE9_41D1_45CA544DB29B.source'), '_top')","toolTipFontColor":"#606060","backgroundOpacity":0,"toolTipPaddingRight":3,"url":trans('Image_D7CF8505_E239_0D1E_41C4_89F5F8A25965_mobile.url'),"toolTipBorderColor":"#767676","data":{"name":"Homepage"},"propagateClick":false,"toolTipPaddingLeft":3,"verticalAlign":"middle","top":"1.64%","toolTipBackgroundColor":"#F6F6F6","toolTipShadowBlurRadius":1,"toolTipBorderRadius":1,"width":"8%","toolTipTextShadowBlurRadius":1,"height":"5%","toolTipFontSize":"1.11vmin","minHeight":1,"toolTipShadowColor":"#333138","minWidth":1,"horizontalAlign":"center","toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","toolTip":trans('Image_D7CF8505_E239_0D1E_41C4_89F5F8A25965_mobile.toolTip')},{"id":"Image_D8A907B0_E229_0D76_41DD_690C472DEA00_mobile","class":"Image","right":"1.94%","scaleMode":"fit_inside","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_D924062F_E227_0F69_41D7_44457099CCB7, 'showEffect', false)}.bind(this); visibleFunc(this.Container_DAFEA0F8_E22B_04F7_41D8_3A6DF7A8BB60_mobile); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_DE60CED7_E258_FF39_41E8_BDDEC10DFAF2, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_D8A907B0_E229_0D76_41DD_690C472DEA00_mobile)","toolTipFontColor":"#606060","backgroundOpacity":0,"toolTipPaddingRight":3,"url":trans('Image_D8A907B0_E229_0D76_41DD_690C472DEA00_mobile.url'),"toolTipBorderColor":"#767676","data":{"name":"Info"},"propagateClick":false,"toolTipPaddingLeft":3,"verticalAlign":"middle","top":"11.46%","toolTipBackgroundColor":"#F6F6F6","toolTipShadowBlurRadius":1,"toolTipBorderRadius":1,"width":"6%","toolTipTextShadowBlurRadius":1,"height":"5%","toolTipFontSize":"1.11vmin","minHeight":1,"toolTipShadowColor":"#333138","minWidth":1,"horizontalAlign":"center","toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","toolTip":trans('Image_D8A907B0_E229_0D76_41DD_690C472DEA00_mobile.toolTip')},{"id":"Image_33BBCF72_1A7A_345B_41A2_9AC2D7A6AB74","class":"Image","scaleMode":"fit_inside","backgroundOpacity":0,"data":{"name":"Image60665"},"url":trans('Image_33BBCF72_1A7A_345B_41A2_9AC2D7A6AB74.url'),"propagateClick":false,"verticalAlign":"middle","width":"8.711%","height":"56.667%","minHeight":1,"minWidth":1},{"id":"FadeOutEffect_33BB74BB_1A7A_54C8_41B8_3D7CAFD12BC3","class":"FadeOutEffect","easing":"cubic_in_out"},{"id":"Container_33BA1F72_1A7A_345B_41B2_D62909404F79","class":"Container","data":{"name":"Container_ruthram"},"backgroundOpacity":0,"right":"0.48%","paddingLeft":5,"propagateClick":false,"overflow":"scroll","scrollBarMargin":1,"layout":"horizontal","scrollBarColor":"#000000","bottom":"0%","scrollBarWidth":5,"gap":2,"verticalAlign":"middle","width":"63.812%","height":"4.688%","minHeight":10,"children":["this.Label_33BBEF72_1A7A_345B_4186_0BC9AFD3E0A8","this.Image_33BBCF72_1A7A_345B_41A2_9AC2D7A6AB74","this.Label_33BA3F72_1A7A_345B_41AA_9C6999C2F571"],"minWidth":10,"horizontalAlign":"right"},{"id":"IconButton_A7FB36DD_E269_0F2E_41EA_45B63D78BAAC","iconURL":"skin/IconButton_A7FB36DD_E269_0F2E_41EA_45B63D78BAAC.png","class":"IconButton","data":{"name":"IconButton MUTE"},"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_A7FB36DD_E269_0F2E_41EA_45B63D78BAAC_pressed.png","mode":"toggle","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_A7FB36DD_E269_0F2E_41EA_45B63D78BAAC_pressed_rollover.png","maxHeight":29,"maxWidth":29,"height":25,"width":26.5,"transparencyActive":true,"minHeight":1,"minWidth":1,"horizontalAlign":"center"},{"backgroundColor":["#FFFFFF","#FFFFFF"],"id":"Container_DAFEA0F8_E22B_04F7_41D8_3A6DF7A8BB60_mobile","class":"Container","data":{"name":"Container39345"},"backgroundOpacity":0.11,"propagateClick":false,"backgroundColorRatios":[0,1],"layout":"absolute","scrollBarColor":"#000000","top":"28.38%","scrollBarWidth":5,"scrollBarMargin":1,"gap":5,"width":"99.722%","height":"44.641%","minHeight":10,"visible":false,"overflow":"scroll","children":["this.Image_D82F824C_E22B_072F_41D9_D27EB631B4A0_mobile","this.CloseButton_D5168785_E229_0D19_41B2_49310D6FACD9_mobile"],"minWidth":10,"left":"0%"},{"id":"IconButton_A7FB56DD_E269_0F2E_41EA_56D432AC81D2","iconURL":"skin/IconButton_A7FB56DD_E269_0F2E_41EA_56D432AC81D2.png","class":"IconButton","data":{"name":"IconButton VR"},"backgroundOpacity":0,"verticalAlign":"middle","maxHeight":25,"maxWidth":25,"height":25,"width":25,"transparencyActive":true,"minHeight":1,"minWidth":1,"horizontalAlign":"center","rollOverIconURL":"skin/IconButton_A7FB56DD_E269_0F2E_41EA_56D432AC81D2_rollover.png"},{"id":"FadeInEffect_33BB64BB_1A7A_54C8_41A2_8B3D62DBE5D9","class":"FadeInEffect","easing":"cubic_in_out"},{"id":"effect_DB6678F0_E229_04F7_41D3_DC3E4526F794","duration":500,"class":"FadeOutEffect"},{"id":"sequence_D1410839_E239_0369_41DB_A936131F1DD4","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"id":"audiores_DE61F6F4_E259_0CFF_41C6_9C6FEC803D6D","mp3Url":trans('audiores_DE61F6F4_E259_0CFF_41C6_9C6FEC803D6D.mp3Url'),"class":"AudioResource"}],"backgroundColorRatios":[0],"layout":"absolute","scrollBarColor":"#000000","scrollBarMargin":2,"gap":10,"watermark":false,"width":"100%","buttonToggleMute":"this.IconButton_A7FB36DD_E269_0F2E_41EA_45B63D78BAAC","height":"100%","minHeight":0,"minWidth":0,"left":541.65,"start":"this.playAudioList([this.audio_DE32AF5C_E259_3D2F_41E8_C39D5754D8D2], true); this.init(); if(!this.get('fullscreenAvailable')) { [this.IconButton_A7FB26DD_E269_0F2E_41B1_8D708D2EEA4C].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.14.js.map
})();
//Generated with v2023.0.14, Wed Jul 12 2023