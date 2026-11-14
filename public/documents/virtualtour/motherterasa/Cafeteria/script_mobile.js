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
var script = {"backgroundColor":["#FFFFFF"],"scripts":{"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"textToSpeech":TDV.Tour.Script.textToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"createTween":TDV.Tour.Script.createTween,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"translate":TDV.Tour.Script.translate,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"init":TDV.Tour.Script.init,"getKey":TDV.Tour.Script.getKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"cloneBindings":TDV.Tour.Script.cloneBindings,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setLocale":TDV.Tour.Script.setLocale,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizShowScore":TDV.Tour.Script.quizShowScore,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playAudioList":TDV.Tour.Script.playAudioList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"unregisterKey":TDV.Tour.Script.unregisterKey,"existsKey":TDV.Tour.Script.existsKey,"isPanorama":TDV.Tour.Script.isPanorama,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initAnalytics":TDV.Tour.Script.initAnalytics,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindow":TDV.Tour.Script.showWindow,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeJS":TDV.Tour.Script.executeJS,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"clone":TDV.Tour.Script.clone,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getOverlays":TDV.Tour.Script.getOverlays,"startMeasurement":TDV.Tour.Script.startMeasurement,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupImage":TDV.Tour.Script.showPopupImage,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"downloadFile":TDV.Tour.Script.downloadFile,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizStart":TDV.Tour.Script.quizStart,"setValue":TDV.Tour.Script.setValue,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"registerKey":TDV.Tour.Script.registerKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"openLink":TDV.Tour.Script.openLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizFinish":TDV.Tour.Script.quizFinish,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getComponentByName":TDV.Tour.Script.getComponentByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPixels":TDV.Tour.Script.getPixels,"initQuiz":TDV.Tour.Script.initQuiz,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"resumePlayers":TDV.Tour.Script.resumePlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaWidth":TDV.Tour.Script.getMediaWidth},"id":"rootPlayer","class":"Player","data":{"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"rate":1,"pitch":1},"defaultLocale":"en","history":{},"name":"Player34902"},"buttonToggleFullscreen":"this.IconButton_A184D84B_E267_0329_41DA_2A6D70079E7C","propagateClick":false,"children":["this.MainViewer_mobile","this.Image_DDA7E42B_E259_036A_41D9_11AF11D2C2B3_mobile","this.Container_A184F84B_E267_0329_41C0_D688024773A3","this.Container_30B1F3D9_1A7E_4C49_4198_E0600A28EA0B"],"defaultMenu":["fullscreen","mute","rotation"],"hash": "2d05db724a09d59aa92af68aab0bbfc76a288889c1d3eed910186a36ef71362e", "definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A_camera","displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"easing":"cubic_in_out","class":"TargetRotationalCameraDisplayMovement","targetPitch":0,"targetStereographicFactor":0}],"class":"PanoramaCamera","displayOriginPosition":{"stereographicFactor":1,"class":"RotationalCameraDisplayPosition","yaw":0,"pitch":-90,"hfov":165},"enterPointingToHorizon":true,"initialSequence":"this.sequence_DC1574A1_E25B_0316_4168_8AB4F023B2D6"},{"id":"FadeInEffect_A046C89C_E26F_032F_41E1_9527BBFC15E6","class":"FadeInEffect","easing":"cubic_in_out"},{"id":"Label_30B123D9_1A7E_4C49_41A8_AC6C7F799A3C","fontSize":"2vmin","class":"Label","click":"this.openLink(this.translate('LinkBehaviour_30B113D9_1A7E_4C49_41AE_3FF84B881D91.source'), '_blank')","backgroundOpacity":0,"data":{"name":"Label59916"},"paddingLeft":1.5,"propagateClick":false,"fontWeight":"bold","text":trans('Label_30B123D9_1A7E_4C49_41A8_AC6C7F799A3C.text'),"width":"43%","textDecoration":"underline","height":"100%","minHeight":8,"minWidth":15,"fontFamily":"Arial","fontColor":"#FFFFFF"},{"id":"IconButton_A184C84B_E267_0329_41E7_B39FD0F2A32A","iconURL":"skin/IconButton_A184C84B_E267_0329_41E7_B39FD0F2A32A.png","class":"IconButton","data":{"name":"IconButton VR"},"backgroundOpacity":0,"verticalAlign":"middle","maxHeight":25,"maxWidth":25,"height":25,"width":25,"transparencyActive":true,"minHeight":1,"minWidth":1,"horizontalAlign":"center","rollOverIconURL":"skin/IconButton_A184C84B_E267_0329_41E7_B39FD0F2A32A_rollover.png"},{"id":"Image_DDA7E42B_E259_036A_41D9_11AF11D2C2B3_mobile","class":"Image","right":"47.37%","scaleMode":"fit_inside","click":"this.openLink(this.translate('LinkBehaviour_A0976DBC_E267_3D6E_419B_23DC9D218F67.source'), '_top')","toolTipFontColor":"#606060","backgroundOpacity":0,"toolTipPaddingRight":3,"url":trans('Image_DDA7E42B_E259_036A_41D9_11AF11D2C2B3_mobile.url'),"toolTipBorderColor":"#767676","data":{"name":"Homepage"},"propagateClick":false,"toolTipPaddingLeft":3,"verticalAlign":"middle","top":"2.08%","toolTipBackgroundColor":"#F6F6F6","toolTipShadowBlurRadius":1,"toolTipBorderRadius":1,"width":"8%","toolTipTextShadowBlurRadius":1,"height":"5%","toolTipFontSize":"1.11vmin","minHeight":1,"toolTipShadowColor":"#333138","minWidth":1,"horizontalAlign":"center","toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","toolTip":trans('Image_DDA7E42B_E259_036A_41D9_11AF11D2C2B3_mobile.toolTip')},{"toolTipBorderColor":"#767676","id":"MainViewer_mobile","class":"ViewerArea","progressBackgroundColorRatios":[0],"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingRight":3,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressRight":"33%","data":{"name":"Main Viewer"},"progressBarBackgroundColorDirection":"horizontal","toolTipFontColor":"#606060","playbackBarHeadShadowColor":"#000000","progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","progressOpacity":0.7,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeight":10,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBottom":50,"playbackBarProgressBorderSize":0,"firstTransitionDuration":0,"playbackBarHeadBorderSize":0,"progressBorderColor":"#000000","playbackBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowBlurRadius":1,"toolTipBorderRadius":1,"progressBackgroundColor":["#000000"],"toolTipTextShadowBlurRadius":1,"subtitlesTextShadowColor":"#000000","width":"100%","toolTipFontSize":"1.11vmin","subtitlesTop":0,"subtitlesFontSize":"3vmin","minHeight":25,"progressBottom":10,"playbackBarBottom":5,"height":"100%","toolTipShadowColor":"#333138","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","playbackBarHeadBorderRadius":0,"progressBarBorderSize":0,"minWidth":50,"toolTipFontFamily":"Arial","progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"progressHeight":2,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundOpacity":1,"progressBorderRadius":2,"playbackBarHeadShadow":true,"propagateClick":false,"playbackBarHeadShadowOpacity":0.7,"progressLeft":"33%","subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":3,"subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","playbackBarLeft":0,"playbackBarRight":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadWidth":6,"vrPointerSelectionColor":"#FF6600","toolTipBackgroundColor":"#F6F6F6","subtitlesGap":0,"playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"playbackBarBorderRadius":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":1.5,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadHeight":15},{"id":"Container_A184F84B_E267_0329_41C0_D688024773A3","class":"Container","data":{"name":"ContainerVR"},"backgroundOpacity":0,"right":"0%","propagateClick":false,"scrollBarOpacity":0.18,"overflow":"scroll","scrollBarMargin":2,"layout":"vertical","scrollBarColor":"#000000","bottom":"5.78%","scrollBarWidth":2,"verticalAlign":"bottom","width":"10.278%","height":"21.516%","minHeight":10,"children":["this.IconButton_A183284B_E267_0329_41E2_0DEACA62F3EB","this.IconButton_A184D84B_E267_0329_41DA_2A6D70079E7C","this.IconButton_A184C84B_E267_0329_41E7_B39FD0F2A32A"],"minWidth":10,"horizontalAlign":"center"},{"id":"Image_30B143D9_1A7E_4C49_41A2_96A658266347","class":"Image","scaleMode":"fit_inside","backgroundOpacity":0,"data":{"name":"Image60665"},"url":trans('Image_30B143D9_1A7E_4C49_41A2_96A658266347.url'),"propagateClick":false,"verticalAlign":"middle","width":"8.711%","height":"56.667%","minHeight":1,"minWidth":1},{"touchControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer","buttonCardboardView":"this.IconButton_A184C84B_E267_0329_41E7_B39FD0F2A32A","aaEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer_mobile","arrowKeysAction":"translate","mouseControlMode":"drag_rotation"},{"id":"Container_30B1F3D9_1A7E_4C49_4198_E0600A28EA0B","class":"Container","data":{"name":"Container_ruthram"},"backgroundOpacity":0,"right":"0.48%","paddingLeft":5,"propagateClick":false,"overflow":"scroll","scrollBarMargin":1,"layout":"horizontal","scrollBarColor":"#000000","bottom":"0%","scrollBarWidth":5,"gap":2,"verticalAlign":"middle","width":"63.812%","height":"4.688%","minHeight":10,"children":["this.Label_30B153D7_1A7E_4C47_41B0_C027B77C76A1","this.Image_30B143D9_1A7E_4C49_41A2_96A658266347","this.Label_30B123D9_1A7E_4C49_41A8_AC6C7F799A3C"],"minWidth":10,"horizontalAlign":"right"},{"id":"panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A","label":trans('panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A.label'),"frames":[{"cube":{"levels":[{"colCount":30,"height":2560,"tags":"ondemand","url":"media/panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":5,"width":15360},{"colCount":18,"height":1536,"tags":"ondemand","url":"media/panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":3,"width":9216},{"colCount":12,"height":1024,"tags":"ondemand","url":"media/panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144},{"colCount":6,"height":1536,"url":"media/panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":9216},{"colCount":6,"height":2048,"tags":"mobilevr2gen","url":"media/panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":12288}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A_t.jpg","class":"CubicPanoramaFrame"}],"hfovMax":130,"class":"Panorama","data":{"label":"Cafeteria"},"hfovMin":"135%","vfov":180,"hfov":360,"thumbnailUrl":"media/panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A_t.jpg"},{"id":"audio_A62884DC_E269_032E_41E5_E1EC91C6BAD5","autoplay":true,"class":"MediaAudio","data":{"label":"Kashia - Yellow Flower"},"audio":"this.audiores_A6432CEA_E269_1CEA_41E0_30623E06A3E3"},{"id":"IconButton_A183284B_E267_0329_41E2_0DEACA62F3EB","iconURL":"skin/IconButton_A183284B_E267_0329_41E2_0DEACA62F3EB.png","class":"IconButton","data":{"name":"IconButton MUTE"},"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_A183284B_E267_0329_41E2_0DEACA62F3EB_pressed.png","mode":"toggle","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_A183284B_E267_0329_41E2_0DEACA62F3EB_pressed_rollover.png","maxHeight":29,"maxWidth":29,"height":25,"width":26.5,"transparencyActive":true,"minHeight":1,"minWidth":1,"horizontalAlign":"center"},{"id":"Label_30B153D7_1A7E_4C47_41B0_C027B77C76A1","fontSize":"2vmin","class":"Label","backgroundOpacity":0,"data":{"name":"Label58804"},"propagateClick":false,"fontWeight":"bold","text":trans('Label_30B153D7_1A7E_4C47_41B0_C027B77C76A1.text'),"width":"43.257%","height":"100%","fontColor":"#FFFFFF","minHeight":8,"minWidth":15,"fontFamily":"Arial"},{"id":"IconButton_A184D84B_E267_0329_41DA_2A6D70079E7C","iconURL":"skin/IconButton_A184D84B_E267_0329_41DA_2A6D70079E7C.png","class":"IconButton","data":{"name":"IconButton FULLSCREEN"},"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_A184D84B_E267_0329_41DA_2A6D70079E7C_pressed.png","mode":"toggle","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_A184D84B_E267_0329_41DA_2A6D70079E7C_pressed_rollover.png","maxHeight":29,"maxWidth":29,"height":25.5,"width":25.6,"transparencyActive":true,"minHeight":1,"minWidth":1,"horizontalAlign":"center"},{"id":"mainPlayList","class":"PlayList","items":[{"end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","camera":"this.panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A_camera","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_A3868BDB_E25B_052A_41B5_4DECA982D47A"}]},{"id":"sequence_DC1574A1_E25B_0316_4168_8AB4F023B2D6","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"id":"audiores_A6432CEA_E269_1CEA_41E0_30623E06A3E3","mp3Url":trans('audiores_A6432CEA_E269_1CEA_41E0_30623E06A3E3.mp3Url'),"class":"AudioResource"}],"backgroundColorRatios":[0],"layout":"absolute","scrollBarColor":"#000000","scrollBarMargin":2,"gap":10,"watermark":false,"width":"100%","buttonToggleMute":"this.IconButton_A183284B_E267_0329_41E2_0DEACA62F3EB","height":"100%","minHeight":0,"minWidth":0,"left":541.65,"start":"this.playAudioList([this.audio_A62884DC_E269_032E_41E5_E1EC91C6BAD5], true); this.init(); if(!this.get('fullscreenAvailable')) { [this.IconButton_A184D84B_E267_0329_41DA_2A6D70079E7C].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }"};
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